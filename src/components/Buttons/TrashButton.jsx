import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap'

const TrashButton = () => {
    return(
        <Button variant="light"><FontAwesomeIcon icon={faTrashCan} /></Button>
    )
}

export default TrashButton