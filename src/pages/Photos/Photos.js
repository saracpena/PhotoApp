import { Component } from 'react'
import Pictures from '../../components/pictures/Pictures'

class Photos extends Component {
    state={
        url: "https://api.unsplash.com/search/photos?query=",
        client: "&client_id=",
        ApiKey: '4Td5E2a6XM5sjB2AZkjTeMY86YfEo8HsL1pqfesoHXU',
        input:'coffee',
        data: '',
        currentImg: []
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
    render() {
        return(
            <div className='photos-container'>
                { this.state.currentImg.map((image,index) => <img key={index} src={image.urls.thumb} />)}
            </div>    
        )    
    }
}


export default Photos