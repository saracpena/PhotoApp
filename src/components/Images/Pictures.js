import { Component } from 'react'

class Pictures extends Component {
    state={
        url: "https://api.unsplash.com/search/photos?query=",
        client: "&client_id=",
        ApiKey: '4Td5E2a6XM5sjB2AZkjTeMY86YfEo8HsL1pqfesoHXU',
        input:'coffee',
        data: '',
        currentImg: []
    }

    handleChange = (e) => {
        this.setState(
            {
            input: e.target.value
            }
        )
    }

    componentDidMount(){
        const Api = this.state.url + this.state.input + this.state.client + this.state.ApiKey
        fetch(Api)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            this.setState({data, currentImg: data.results})
        })
    }

    // handleSubmit = (e) => {
    //    e.preventDefault()
    //    const Api = this.state.url + this.state.input + this.state.client + this.state.ApiKey
    //    console.log(Api);
    //    fetch(Api)
    //     .then((response) => response.json())
    //     .then((data) => {
    //         console.log(data);
    //         this.setState({data, currentImg: data.results})
    //     })
    // }

    
    render() {
        return(
            <div className='photos-container'>
                {/* <form>
                    <input onChange={this.handleChange} value={this.state.input}></input>
                    <button onClick={this.handleSubmit}>submit</button>
                </form> */}
                { this.state.currentImg.map((image,index) => <img key={index} src={image.urls.thumb} />)}
            </div>    
        )    
    }
}

export default Pictures