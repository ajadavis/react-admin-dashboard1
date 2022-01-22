import './widgetSm.css'
import { Visibility } from '@material-ui/icons'

export default function WidgetSm() {
    return (
        <div className='widgetSm'>
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://pbs.twimg.com/media/DWshMJsU8AELSpq.jpg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Big Dick Daddy</span>
                        <span className="widgetSmUserTitle">Tittie Engineer</span>
                    </div>
                        <button className="widgetSmButton">
                            <Visibility className='widgetSmIcon'/>
                            Display
                        </button>
                    
                </li>
            </ul>
        </div>
    )
}
