import { _decorator, Component, Input, Node,UITransform,Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('moveBall')
export class moveBall extends Component {
    @property({type:Node})
        ball = null;

        onLoad()
        {
            this.node.on(Input.EventType.MOUSE_DOWN,this.setscheduler,this);
            this.node.on(Input.EventType.MOUSE_UP,()=>{
                this.unschedule(this.moveObject);
            },this)
        }

        setscheduler()
        {
            this.schedule(this.moveObject,0.1);
        }
        moveObject()
        {
                let pos:Vec3 = this.ball.getPosition();
                this.ball.setPosition(pos.x+20,pos.y)
                this.ball.angle -= 20;

                


         }
    start() {

    }

    update(deltaTime: number) {
        
    }
}

