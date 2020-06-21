import WikiPageBox, { WikiStages } from '../components/Elements/WikiPageBox';
import { useState } from 'preact/hooks';
import { Box } from 'bluelib';
import { Fragment } from 'preact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPencilAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Layout/Header';

export default function (props) {
	const [stage, setStage] = useState(WikiStages.VIEWING);

	function stageSetter(value) {
		return function() {
			return setStage(value)
		}
	}

	return (
		<Fragment>
			<Box>
				<Header
					left={
						<div>
							<button onClick={stageSetter(WikiStages.VIEWING)}>
								<FontAwesomeIcon icon={faEye}/> View
							</button>
						</div>
					}

					right={
						<div>
							<button onClick={stageSetter(WikiStages.EDITING)}>
								<FontAwesomeIcon icon={faPencilAlt}/> Edit
							</button>
							&nbsp;
							<button onClick={stageSetter(WikiStages.PREVIEWING)}>
								<FontAwesomeIcon icon={faSearch}/> Preview
							</button>
						</div>
					}
				/>
			</Box>
			<WikiPageBox id={props.id} stage={stage}/>
		</Fragment>
	);
}
