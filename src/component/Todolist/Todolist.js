import React,{Component} from 'react';
// import '../../css/H-ui.css'

class Todolist extends Component{
	constructor(props){
		super(props);
		this.state={
			list:[]
		};
	}

	addData=()=>{
        //alert(this.refs.title.value);
        // templist=[];
		// templist=this.state.list;
		if(this.refs.title.value!="")
		{
			this.state.list.push(this.refs.title.value); //返回值是索引值
			this.refs.title.value="";
			//将该值赋值给list数组，使用setstate改变state.list的状态
			this.setState({
				list:this.state.list,
			});
		}
		else{
			alert('请输入待添加项目～')
		}
		
	}

	delData=(key)=>{
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
				<div className='panel-header'>
					React Todolist
				</div>
				<div className="panel-body">
					<div className="row cl">
						<div className="col-xs-4">
							<input type="text" className="input-text" placeholder="请输入需要添加的项目" ref="title"/>   {/* 设置ref，可获取表单节点  */}
						</div>
						<div className="col-xs-2">
							<button className="btn btn-primary radius" type="submit" onClick={this.addData}>添加</button>
						</div>
					</div>
					<hr class="list_hr" />
					<div className="row cl ">
						<div className="col-xs-6">
							<ul className="ItemList">
							{/* 循环数据 */}
								{
									this.state.list.map((value,key)=>{ //使this指向该对象
										return(
										//jsx需要一个唯一的根元素
										<div className="row cl itemcontent">
											<div className="col-xs-4">
												<li key={key}>{value}</li>
											</div>
											<div className="col-xs-2">
												<button className="btn btn-warning radius" onClick={this.delData.bind(this,key)}>删除</button>
											</div>
										</div>
										)   
									})
								}
							</ul>
						</div>
					</div>
				</div>
            </div>
		)
    }
}

export default Todolist;