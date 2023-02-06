import { _decorator, Component, Node ,director, Input} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('goBack')
export class goBack extends Component {
    onLoad()
    {
        director.preloadScene("start");
        this.node.on(Input.EventType.TOUCH_START,()=>{
            director.loadScene("start");
        })
    }
    start() {

    }

    update(deltaTime: number) {
        
    }
}

