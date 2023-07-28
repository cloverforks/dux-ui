import React, {
  useState,
  useEffect,
  forwardRef,
  Ref,
  createContext,
  useContext,
  useCallback,
  useRef,
} from 'react'
import {
  RowData,
  Cell,
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  Header,
  SortDirection,
  ColumnSort,
  createColumnHelper,
  ColumnHelper,
  CellContext,
} from '@tanstack/react-table'
import clsx from 'clsx'
import Checkbox from '../checkbox'
import './style.scss'

declare module '@tanstack/table-core' {
  /* eslint-disable @typescript-eslint/no-unused-vars */
  interface ColumnMeta<TData extends RowData, TValue> {
    align?: 'left' | 'center' | 'right'
    width?: string
    fixed?: boolean
    sort?: boolean
  }
}

interface TData {
  [key: string]: any
}

interface ContextProps {
  columnHelper: ColumnHelper<TData>
  addColumn: (column: ColumnDef<TData, unknown>) => void
}
const context = createContext<ContextProps>({} as ContextProps)

interface ThProps {
  header: Header<TData, unknown>
}

const TableTh = ({ header }: ThProps) => {
  const columnMeta = header.column.columnDef.meta || {}

  const Icons = (sort: false | SortDirection) => {
    if (!sort) {
      return <div className='icon-[heroicons--arrows-up-down] h-4 w-4'></div>
    }
    if (sort === 'asc') {
      return <div className='icon-[heroicons--arrow-up] h-4 w-4'></div>
    }
    if (sort === 'desc') {
      return <div className='icon-[heroicons--arrow-down] h-4 w-4'></div>
    }
  }

  return (
    <th
      {...{
        colSpan: header.colSpan,
        width: columnMeta.width,
        className: clsx([columnMeta.fixed ? 'fixed-column' : '']),
      }}
    >
      {header.isPlaceholder ? null : (
        <div
          className={clsx([
            'flex items-center h-full',
            columnMeta.align == 'left' ? 'justify-start' : '',
            columnMeta.align == 'center' ? 'justify-center' : '',
            columnMeta.align == 'right' ? 'justify-end' : '',
            header.column.getCanSort() && columnMeta.sort
              ? 'justify-between cursor-pointer select-none'
              : '',
          ])}
          onClick={() => {
            columnMeta.sort ? header.column.getToggleSortingHandler() : null
          }}
        >
          <div>{flexRender(header.column.columnDef.header, header.getContext())}</div>
          {columnMeta.sort && (
            <div className='h-4 w-4'>{Icons(header.column.getIsSorted()) ?? null}</div>
          )}
        </div>
      )}
    </th>
  )
}

interface TdProps {
  cell: Cell<TData, unknown>
}

const TableTd = ({ cell }: TdProps) => {
  const columnMeta = cell.column.columnDef.meta || {}
  return (
    <td align={columnMeta.align as any} className={clsx([columnMeta.fixed ? 'fixed-column' : ''])}>
      <div
        className={`flex items-center  ${!columnMeta.align && 'justify-between'} ${
          columnMeta.align == 'left' && 'justify-start'
        } ${columnMeta.align == 'center' && 'justify-center'}`}
      >
        {flexRender(cell.column.columnDef.cell, cell.getContext())}
      </div>
    </td>
  )
}

interface TableProps {
  dataKey?: string
  data?: TData[]
  loading?: boolean
  selection?: boolean
  children?: React.ReactNode
  onSelection?: (selected: string[]) => void
}

const columnHelper = createColumnHelper<TData>()
const TableComp = (
  { dataKey, selection = false, onSelection, data, children, loading = false }: TableProps,
  ref: Ref<HTMLTableElement>
) => {
  const [rowSelection, setRowSelection] = useState<Record<string, boolean>>({})
  const [sorting, setSorting] = useState<ColumnSort[]>([])
  const [loadingState, setLoadingState] = useState<boolean>(loading)
  const [dataList, setDataList] = useState<TData[]>([])
  const columns = useRef<ColumnDef<TData, any>[]>([])
  useEffect(() => {
    setRowSelection({})
    setDataList(data || [])
  }, [data])

  useEffect(() => {
    setLoadingState(loading)
  }, [loading])

  useEffect(() => {
    onSelection && onSelection(Object.keys(rowSelection))
  }, [onSelection, rowSelection])

  const addColumn = useCallback((column: ColumnDef<TData, any>) => {
    console.log(column)
    columns.current = [...columns.current, column]
  }, [])

  useEffect(() => {
    if (selection) {
      addColumn(
        columnHelper.accessor(dataKey || 'id', {
          id: dataKey || 'id',
          meta: {
            width: '80px',
            align: 'center' as const,
          },
          header: ({ table }) => (
            <>
              <Checkbox
                checked={
                  table.getIsAllRowsSelected()
                    ? true
                    : table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()
                    ? 'indeterminate'
                    : false
                }
                onChange={() => {
                  table.toggleAllRowsSelected()
                }}
              />
            </>
          ),
          cell: ({ row }) => (
            <Checkbox
              checked={
                row.getIsSelected()
                  ? true
                  : row.getIsSomeSelected() && !row.getIsSelected()
                  ? 'indeterminate'
                  : false
              }
              onChange={() => {
                row.toggleSelected()
              }}
              disabled={!row.getCanSelect()}
            />
          ),
        })
      )
    }
  }, [addColumn, dataKey, selection])

  const table = useReactTable({
    data: dataList,
    columns: columns.current,
    state: {
      sorting,
      rowSelection,
    },
    enableColumnResizing: true,
    enableRowSelection: true,
    debugTable: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  return (
    <div className={`overflow-x-auto  min-h-[100px] relative`}>
      <context.Provider
        value={{
          columnHelper: columnHelper,
          addColumn,
        }}
      >
        {children}
        <table className='app-table' ref={ref}>
          <thead>
            {table.getHeaderGroups().map((headerGroup, index) => (
              <tr key={index}>
                {headerGroup.headers.map((header, headerIndex) => (
                  <TableTh header={header} key={headerIndex} />
                ))}
              </tr>
            ))}
          </thead>

          {loadingState && (
            <tbody>
              {table.getHeaderGroups().map((headerGroup) => {
                return [0, 1, 2].map((_, index) => (
                  <tr key={index}>
                    {headerGroup.headers.map((_, headerIndex) => (
                      <td key={headerIndex}>
                        <div className='app-skeleton h-6 animate-pulse'></div>
                      </td>
                    ))}
                  </tr>
                ))
              })}
            </tbody>
          )}

          {!loadingState && (
            <tbody>
              {table.getRowModel().rows.map((row, index) => (
                <tr key={index} className={row.getIsSelected() ? '.app-table-select' : ''}>
                  {row.getVisibleCells().map((cell, i) => {
                    return <TableTd key={i} cell={cell} />
                  })}
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </context.Provider>
    </div>
  )
}

TableComp.displayName = 'Table'

interface ColumnProps {
  title: string
  field: string
  align?: 'left' | 'center' | 'right'
  width?: string
  fixed?: boolean
  sort?: boolean
  children?: (data: TData, cell: CellContext<TData, unknown>) => void
}

const TableColumn = ({ title = '', ...props }: ColumnProps) => {
  const tebleContext = useContext(context)
  useEffect(() => {
    tebleContext.addColumn?.(
      tebleContext.columnHelper.accessor(props.field, {
        id: props.field,
        meta: {
          width: props.width,
          fixed: props.fixed,
          sort: props.sort,
        },
        header: title,
        cell: (cell: CellContext<TData, unknown>) => {
          return props?.children?.(cell.row.original, cell) || cell.row.original[props.field]
        },
      })
    )
  }, [])
  return null
}
TableColumn.displayName = 'TableColumn'

const Table = forwardRef(TableComp) as React.ForwardRefExoticComponent<
  TableProps & React.RefAttributes<HTMLDivElement>
> & {
  Column: typeof TableColumn
}

Table.Column = TableColumn

export default Table
