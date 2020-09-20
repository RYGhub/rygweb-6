import style from './Halloween2020Mini.less';
import Mini from './Mini';
import { Fragment } from 'preact';
import { BaseLink } from 'bluelib';


export default function (props) {
	const header = (
		<BaseLink class={style.header} href={`/u/${props.user.uid}`}>
			<img className={style.avatar} src={props.user.avatar_url} alt={""}/>
			&nbsp;
			{props.user.username}
		</BaseLink>
	);

	const body = (
		<Fragment>
			<div className={style.tarotTitle}>
				Ottenuti:
			</div>
			<div className={style.tarotList}>
				<div>I</div>
				<div>II</div>
				<div>III</div>
				<div>IV</div>
				<div>V</div>
				<div>VI</div>
				<div>VII</div>
				<div>VIII</div>
				<div>IX</div>
				<div>X</div>
				<div>XI</div>
				<div>XII</div>
				<div>XIII</div>
				<div>XIV</div>
				<div>XV</div>
				<div>XVI</div>
				<div>XVII</div>
				<div>XVIII</div>
				<div>XIX</div>
				<div>XX</div>
				<div>XXI</div>
				<div>XXII</div>
			</div>
		</Fragment>
	);

	const icon = (
		<img src={"#"} alt={""} title={"Halloween 2020"}/>
	);

	return (
		<Mini class={style.halloween} header={header} body={body} user={props.user} icon={icon}/>
	);
}
