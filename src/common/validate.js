const validate = values => {
    const errors = {}
    const max = 50;
    const min = 2;
    const requiredFields = [
        'FirstName',
        'LastName',
        'Email',
        'favoriteColor',
        'notes',
        'Password',
        'PhoneNumber',
        'State',
        'Country',
        'UserName'
    ]
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = (`${field} Required`)
        }
    })
    if (
        values.Email &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)
    ) {
        errors.Email = 'Invalid email address'
    }
    if (values.PhoneNumber && !/^(0|[1-9][0-9]{9})$/i.test(values.PhoneNumber)) {
        errors.PhoneNumber = 'Invalid phone number, must be 10 digits'
    }

    return errors
}

export default validate;