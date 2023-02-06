import { _decorator, Component, Input, Node, UITransform, Vec3 ,Enum, lerp} from "cc";
const { ccclass, property } = _decorator;


enum DIRECTION{
    None = 0,
    Left = 1,
    Right = 2
    
}

@ccclass("moveBall")
export class moveBall extends Component {
    count:number = 0;
  @property({ type: Node })
  ball = null;

  @property({type:Enum(DIRECTION)})
  buttonType = DIRECTION.None;

  onLoad() {
    this.node.on(Input.EventType.MOUSE_DOWN, this.setscheduler, this);
    this.node.on(
      Input.EventType.MOUSE_UP,
      () => {
        this.count = 0;
        this.unschedule(this.moveObject);
      },
      this
    );
  }

  setscheduler() {
    this.schedule(this.moveObject, 0.1);
  }

  moveright()
  {
    
    this.count = 2;
  }
  moveleft()
  {
   
    this.count = 1      
  }
  moveObject() {
    switch(this.buttonType){
        case DIRECTION.Left:
            this.moveleft();
            break;
        
        case DIRECTION.Right:
            this.moveright();
            break;

    }
    
  }
  start() {}

  update(deltaTime: number) {
    if(this.count == 1)
    {
        let pos:Vec3 = this.ball.getPosition();
        lerp(pos.x,pos.x-10,0.1*deltaTime);
        pos.x = pos.x - 10;
        this.ball.setPosition(pos)
        this.ball.angle += 10;
    }else if(this.count == 2)
    {
        let pos: Vec3 = this.ball.getPosition();
        lerp(pos.x,pos.x+10,0.1*deltaTime);
        this.ball.setPosition(pos.x + 10, pos.y);
        this.ball.angle -= 10;
    }

  }
}
