import { Box, FormInput, getEventValue } from 'bluelib';
import SimpleMDEEditor from 'react-simplemde-editor';
import "easymde/dist/easymde.min.css";
import "../../../styles/override-easymde.less"

export default function (props) {
	return (
		<Box>
			<p>
				<FormInput type={"text"} label={"Categoria"} value={props.value.category} onChange={getEventValue(props.set.category)} validity={props.validity.category}/>
				<FormInput type={"text"} label={"Titolo"} value={props.value.title} onChange={getEventValue(props.set.title)} validity={props.validity.title}/>
			</p>
			<SimpleMDEEditor
				options={{
					spellChecker: false,
					blockStyles: {
						"bold": "**",
						"code": "```",
						"italic": "_"
					},
					indentWithTabs: false,
					toolbar: ["bold", "italic", "|", "heading-smaller", "heading-bigger", "|", "code", "quote", "unordered-list", "ordered-list", "|", "link", "image", "table", "horizontal-rule", "|", "guide"]
				}}
				value={props.value.contents}
				onChange={props.set.contents}
				validity={props.validity.contents}
			/>
			<p>
				<details>
					<summary>Avanzate</summary>
					<FormInput type={"text"} label={"Formato"} value={props.value.format} onChange={getEventValue(props.set.format)} validity={props.validity.format}/>
					<FormInput type={"text"} label={"Ruolo visualiz."} value={props.value.role_to_view} onChange={getEventValue(props.set.role_to_view)} validity={props.validity.role_to_view}/>
					<FormInput type={"text"} label={"Ruolo modifica"} value={props.value.role_to_edit} onChange={getEventValue(props.set.role_to_edit)} validity={props.validity.role_to_edit}/>
				</details>
			</p>
		</Box>
	);
}
