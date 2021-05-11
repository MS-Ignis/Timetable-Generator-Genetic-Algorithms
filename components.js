// papaparse example
// Papa.parse("XI A.csv", {
//     download:true,
// 	complete: function(results) {
// 		console.log("Finished:", results.data);
// 	}
// });
class ButtonClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            classList: []
        }
        this.clickHandler = this.clickHandler.bind(this);
        this.getData = this.getData.bind(this);
    }
    async componentDidMount() {
        this.setState({classList: await this.getData('class_list.csv')})
    }

    getData(filename) {
        return new Promise(resolve => {
            Papa.parse(filename, {
                download: true,
                complete: results => {
                    resolve(results.data[0]);
                }
            });
        });
    }

    clickHandler() {
        document.getElementById('timetable-overlay').style.display = 'flex';
    }

    render() {
        const renderClassList = this.state.classList.map(item => <button id={item + '-button'} key={item} onClick={this.clickHandler}>{item}</button>)
        console.log(renderClassList)
        return (
            <div>{renderClassList}</div>
        )
    }
}

ReactDOM.render(<ButtonClass />, document.getElementById('class-button-container'))