import { useState } from 'preact/hooks';
import { useFormValidator } from 'bluelib';

export default function (initialData) {
	const [category, setCategory] = useState(initialData.category);
	const [title, setTitle] = useState(initialData.title);
	const [contents, setContents] = useState(initialData.contents);
	const [format, setFormat] = useState(initialData.format);
	const [roleToView, setRoleToView] = useState(initialData.role_to_view);
	const [roleToEdit, setRoleToEdit] = useState(initialData.role_to_edit);

	const categoryStatus = useFormValidator(category, (value, setStatus) => {});
	const titleStatus = useFormValidator(title, (value, setStatus) => {});
	const contentsStatus = useFormValidator(contents, (value, setStatus) => {});
	const formatStatus = useFormValidator(format, (value, setStatus) => {});
	const roleToViewStatus = useFormValidator(roleToView, (value, setStatus) => {});
	const roleToEditStatus = useFormValidator(roleToEdit, (value, setStatus) => {});

	return {
		"value": {
			category: category,
			title: title,
			contents: contents,
			format: format,
			role_to_view: roleToView,
			role_to_edit: roleToEdit,
		},
		"set": {
			category: setCategory,
			title: setTitle,
			contents: setContents,
			format: setFormat,
			role_to_view: setRoleToView,
			role_to_edit: setRoleToEdit,
		},
		"validity": {
			category: categoryStatus,
			title: titleStatus,
			contents: contentsStatus,
			format: formatStatus,
			role_to_view: roleToViewStatus,
			role_to_edit: roleToEditStatus,
		}
	}
}
