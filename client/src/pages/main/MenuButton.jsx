import { Button } from "primereact/button"
import { Sidebar } from "primereact/sidebar"
import { Divider } from 'primereact/divider'
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog'
import { useNavigate } from 'react-router-dom'
import { useState } from "react"
import { PropTypes } from 'prop-types'

export const MenuButton = ({ username }) => {

    const [sideBarVisibility, setSideBarVisibility] = useState(false)
    const navigate = useNavigate()

    const confirmLogOut = () => {
        confirmDialog({
            message: 'Do you want to log out?',
            icon: 'pi pi-info-circle',
            acceptClassName: 'p-button-danger',
            accept: () => navigate('/')
        })
    }

    const handleMenuBar = (e) => {
        e.preventDefault()
        setSideBarVisibility(true)
    }

    return (
        <>
            <Button className='mt-2 ml-2 mr-5' icon='pi pi-bars' rounded onClick={handleMenuBar} />
            <Sidebar visible={sideBarVisibility} onHide={() => setSideBarVisibility(false)} >
                <div className="grid">
                    <div className="col-12">
                        <Button label={username} icon='pi pi-user' text className='mt-3 w-full' />
                    </div>
                    <Divider />
                    <ConfirmDialog draggable={false} position='top' header="Log out Confirmation" />
                    <div className="col-12">
                        <Button label='Log Out' severity='danger' icon='pi pi-sign-out' text className='w-full' onClick={confirmLogOut} />
                    </div>
                </div>
            </Sidebar>
        </>
    )
}

MenuButton.propTypes = {
    username: PropTypes.string
}