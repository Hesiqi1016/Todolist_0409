import React,{Component} from 'react';

class Todolist extends Component{
	constructor(props){
		super(props);
		this.state={
			list:[]
		};
	}

	addData=()=>{
        alert(this.refs.title.value);
        // templist=[];
		// templist=this.state.list;
		this.state.list.push(this.refs.title.value); //返回值是索引值
		this.refs.title.value="";
	    //将该值赋值给list数组，使用setstate改变state.list的状态
		this.setState({
			list:this.state.list,
        });
	}

	delData=(key)=>{
        alert(key);
        // temp=[];
		// temp=this.state.list;
		this.state.list.splice(key,1);
		this.setState({
			list:this.state.list
		});

	}

	render(){
		return(
			<div>
			    <h2>React</h2>
                <input ref="title"/>   {/* 设置ref，可获取表单节点  */}
                <button onClick={this.addData}>添加</button>
                <hr />
                <ul>
                {/* 循环数据 */}
                    {
                        this.state.list.map((value,key)=>{ //使this指向该对象
                            return(
                            //jsx需要一个唯一的根元素
                            <div>
                                <li key={key}>-------{value}------</li>
                                <button onClick={this.delData.bind(this,key)}>删除</button>
                            </div>
                            )   
                        })
                    }
                </ul>
            </div>
		)
    }
}

export default Todolist;