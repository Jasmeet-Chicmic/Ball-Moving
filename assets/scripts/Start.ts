import { _decorator, Component, director, Input, lerp, Node, UITransform, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Start')
export class Start extends Component {
    count:number = 0;
    start() {

    }

    onLoad()
    {
        director.preloadScene("main",()=>{
            console.log("scene is loaded");
            
        })
        this.node.on(Input.EventType.TOUCH_START,this.scaleDown,this);
        this.node.on(Input.EventType.TOUCH_END,this.scaleUp,this);


    }

    scaleUp()
    {
        let scale:Vec3 = this.node.scale;
            lerp(scale.x,scale.x+0.2,0.1);
            lerp(scale.y,scale.y+0.2,0.1);
            this.node.setScale(scale.x+0.2,scale.y+0.2);
            this.count = 0;
      

    }
    scaleDown()
    {
        let scale:Vec3 = this.node.scale;
        lerp(scale.x,scale.x-0.2,0.1);
        lerp(scale.y,scale.y-0.2,0.1);
        this.node.setScale(scale.x-0.2,scale.y-0.2);
        director.loadScene("main");
    }
    update(deltaTime: number) {
        
        
    }
}

