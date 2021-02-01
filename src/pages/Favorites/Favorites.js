import { Component } from 'react';
import Pictures from '../../components/pictures/Pictures';
import BrownElla from '../../Pictures/BrownElla';
import RayBass from '../../Pictures/RayBass';
import YoungRay from '../../Pictures/YoungRay';
import EllaGig from '../../Pictures/EllaGig';
import EllaSolo from '../../Pictures/EllaSolo.jpg';
import EllaMarylin from '../../Pictures/EllaMarylin';
import Davis from '../../Pictures/Davis.jpg';
import Miles from '../../Pictures/Miles.jpg';
import MilesSolo from '../../Pictures/MilesSolo.jpg';

class Photos extends Component {
    state={
        url: "https://api.unsplash.com/search/photos?query=",
        client: "&client_id=",
        ApiKey: '4Td5E2a6XM5sjB2AZkjTeMY86YfEo8HsL1pqfesoHXU',
        input:'',
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
            <>
            <div className='photos-container'>
                { this.state.currentImg.map((image,index) => <img key={index} src={image.urls.thumb} />)}
            </div>
            
            <div className='image1'>   
                <img src={BrownElla} alt='BrownElla' />
            </div>
            <div className='image2'>
                <img src={RayBass} alt='RayBass' />
            </div>
            <div className='image3'>
                <img src={YoungRay} alt='YoungRay' />
            </div>
            <div className='image4'>
                <img src={EllaGig} alt='EllaGig' />       
            </div>
            <div className='image5'>
                <img src={EllaSolo} alt='EllaSolo' />
            </div>
            <div className='image6'>
                <img src={EllaMarylin} alt='EllaMarylin' />  
            </div>
            <div className='image7'>
                <img src={Davis} alt='Davis' />
            </div>
            <div className='image8'>
                <img src={Miles} alt='Miles' />
            </div>
            <div className='image9'>
                <img src={MilesSolo} alt='MilesSolo' />
            </div>
            </>
        )
    }

}    

export default Photos