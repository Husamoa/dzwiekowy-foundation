import React from 'react'
import Layout from '../components/layout'
import SEO from "../components/seo";

const VideoPage = () => (
    <Layout className={'page video-page'}>
        <SEO
            title={'Video'}
            description={'Video o Tenisie Stołowym Dźwiękowym'}
        />
        <h1>Video</h1>
        <hr/>
        <div className="grids col-1 sm-1 lg-2">
            <div>
                <h3>Spot TSD</h3>
                <div className={'responsive-container'}>
                    <iframe className={'responsive-iframe'} width={560} height={349} title="Spot Tenisa Stołowego Dźwiękowego" src="https://www.youtube.com/embed/znShAVTNPPo"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen={true}/>
                </div>
            </div>
            <div>
                <h3>Instruktaż TSD</h3>
                <div className={'responsive-container'}>
                    <iframe className={'responsive-iframe'} width={560} height={349} src="https://www.youtube.com/embed/n1Cue3_GE1k"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen={true}
                            title="Instruktaż Tenisa Stołowego Dźwiękowego"/>
                    <div>
                        For english version <a href="https://www.youtube.com/watch?v=77JbxecGjYA"
                                               target="_blank" rel="noreferrer">click here</a>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default VideoPage