import style from './BrawlhallaMini.less';
import Mini from './Mini';
import Link from '../Dynamic/Link';


export default function (props) {

	return (
		<Mini class={style.brawlhalla}>
			<div className={style.sectionName}>
				<span className={style.contents}>
					<img className={style.avatar} src={"https://combo.steffo.eu/open/brawlhalla/BrawlhallaStandard.png"} alt={""}/>
					&nbsp;
					{props.data.name}
				</span>
			</div>
			<div class={style.section1v1}>
				<Link icon={false} href={`https://www.brawlhalla.com/rankings/1v1/?p=${props.data.name}`}>
					<div className={style.caption}>
						1v1
					</div>
					<div>
						<span className={style.value}>
							{props.data["1v1"] ? props.data["1v1"].rating : "-"}
						</span>
					</div>
				</Link>
			</div>
			<div className={style.section2v2}>
				<div className={style.caption}>
					2v2
				</div>
				<div>
					<span className={style.value}>
						{props.data["2v2"] ? props.data["2v2"].rating : "-"}
					</span>
				</div>
			</div>
		</Mini>
	);
}
