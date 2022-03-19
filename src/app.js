import React from "react";
import './app.css'
class APP extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            index:1,
            imghtml:""
        }
    }
    Marge=()=>{
        console.log("hh")
        var c=document.createElement('canvas');
        var ctx=c.getContext("2d");
        c.width=2000;
        c.height=2000;
        var first=document.getElementById("first")
        var second=document.getElementById("second")
        var imgBox=document.getElementById("imgBox")
        ctx.drawImage(first,0,0,2000,2000)
        ctx.drawImage(second,0,0,2000,2000)
        let curSrc=c.toDataURL("image/ong");
        this.setState({
            imghtml:<img id="final" src={curSrc}/>
        })

    };
    render(){
        return(
            <div className="background">
                <div className="left">
                    <img src={require('./images/left.png')}/>
                </div>
                <div className="center">
                    <div className="avatar">
                        <img id="first" src={require('./images/2.png')}/>
                        <img id="second" src={require('./images/'+this.state.index+'.png')}/>
                    </div>
                    <button className="buttom" onClick={this.Marge}>
                        Choose
                    </button>
                </div>
                <div className="right">
                <img src={require('./images/next.png')}/>
                </div>
                <div className="imgBox">{this.state.imghtml}</div>
            </div>
        );
    }
}
export default APP