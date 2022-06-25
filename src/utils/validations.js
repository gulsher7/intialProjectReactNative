import validator from 'is_js';

const checkEmpty = (val, key) => {
	if (validator.empty(val.trim())) {
		return `${key}`;
	} else {
		return '';
	}
};

const checkMinLength = (val, minLength, key) => {
	if (val.trim().length < minLength) {
		return `Please enter valid ${key}`;
	} else {
		return '';
	}
};

export default function (data) {
	let error = '';
	const {
		firstName,
		lastName,
		userName,
		email,
		password,
	} = data;

	if (firstName !== undefined) {
		let emptyValidationText = checkEmpty(firstName, 'Please enter your first name');
		if (emptyValidationText !== '') {
			return emptyValidationText;
		} else {
			let minLengthValidation = checkMinLength(firstName, 2, 'first name');
			if (minLengthValidation !== '') {
				return minLengthValidation;
			}
		}
	}

	if (lastName !== undefined) {
		let emptyValidationText = checkEmpty(lastName, 'Please enter your last name');
		if (emptyValidationText !== '') {
			return emptyValidationText;
		} else {
			let minLengthValidation = checkMinLength(lastName, 2, 'last name');
			if (minLengthValidation !== '') {
				return minLengthValidation;
			}
		}
	}
	if (userName !== undefined) {
		let emptyValidationText = checkEmpty(userName, 'Please enter your user name');
		if (emptyValidationText !== '') {
			return emptyValidationText;
		} else {
			let minLengthValidation = checkMinLength(userName, 2, 'user name');
			if (minLengthValidation !== '') {
				return minLengthValidation;
			}
		}
	}

	if (email !== undefined) {
		let emptyValidationText = checkEmpty(email, 'Please enter your email');
		if (emptyValidationText !== '') {
			return emptyValidationText;
		} else {
			if (!validator.email(email)) {
				return 'Please enter valid email';
			}
		}
	}

	if (password !== undefined) {
		let emptyValidationText = checkEmpty(password, 'Please enter password');
		if (emptyValidationText !== '') {
			return emptyValidationText;
		} else {
			let minLengthValidation = checkMinLength(password, 6, 'password');
			if (minLengthValidation !== '') {
				return "Password requires minimum 6 characters"
			}
		}
	}

}
