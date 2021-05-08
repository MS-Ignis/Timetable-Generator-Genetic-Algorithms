const classList = ['XIIA', 'XIIB', 'XIIC', 'XIID'];

class ButtonClass extends React.Component{
    constructor(props){
        super(props)
        this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler(){
        document.getElementById('timetable-overlay').style.display = 'flex';
    }

    render(){
        const renderClassList = classList.map(item => <button id = {item+'-button'} key = {item} onClick = {this.clickHandler}>{item}</button>)
        console.log(renderClassList)
        return (
            <div>{renderClassList}</div>
        )
    }
}

ReactDOM.render(<ButtonClass />, document.getElementById('class-button-container'))