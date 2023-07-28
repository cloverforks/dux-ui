import Modal from './index'
import Button from '@/components/button'

const Demo = () => {
  const { onClose } = Modal.useContext()
  return (
    <>
      Here the demo text
      <Modal.Footer>
        <Button
          color='primary'
          onClick={() => {
            onClose?.()
          }}
        >
          Ok
        </Button>
      </Modal.Footer>
    </>
  )
}

export default Demo
