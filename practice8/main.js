
import React,{Component} from 'react'
import ReactDOM from 'react-dom'
	
class LikeButton extends Component{
	constructor(props){
		super(props);
		// this.state.liked = false;
		this.state = {liked:false};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(event){
		this.setState({liked: !this.state.liked});
	}
	render(){
		var text = this.state.liked ? 'like' : 'have\'t liked';
		return (
			<p onClick={this.handleClick}>
				You {text} this.Click to toggle
			</p>
		);
	}
}

ReactDOM.render(
	<LikeButton />,
	document.getElementById('example')
)