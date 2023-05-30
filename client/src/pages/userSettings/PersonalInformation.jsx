import { Fieldset } from "primereact/fieldset"
import { InputText } from "primereact/inputtext"
import { Dropdown } from "primereact/dropdown"
import { PropTypes } from 'prop-types'
import { useEffect, useState } from "react"


export const PersonalInformation = ({ user, setUser }) => {

    const genders = [
        "Male",
        "Female",
        "Non Binary"
    ]

    const handleChange = (e) => {
        try {
            setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Fieldset legend="Personal Information" className="m-2" style={{ width: '95%' }} >
            <div className="flex flex-column row-gap-5" style={{ border: '2px dashed white' }}>
                <div className="p-float-label" style={{ border: '2px dashed red' }}>
                    <InputText value={user.name} id="name" name="name" maxLength={15} className="md:w-6 w-12" onChange={handleChange} />
                    <label htmlFor="name">Name</label>
                </div>
                <div className="p-float-label" style={{ border: '2px dashed red' }}>
                    <InputText value={user.surname} id="surname" name="surname" maxLength={15} className="md:w-6 w-12" onChange={handleChange} />
                    <label htmlFor="surname">Surname</label>
                </div>
                <div className="p-float-label" style={{ border: '2px dashed red' }}>
                    <Dropdown value={user.gender} id="gender" name="gender" className="md:w-6 w-12" options={genders} onChange={handleChange} />
                    <label htmlFor="gender">Gender</label>
                </div>
            </div>
        </Fieldset>
    )
}

PersonalInformation.propTypes = {
    user: PropTypes.any,
    setUser: PropTypes.func
}