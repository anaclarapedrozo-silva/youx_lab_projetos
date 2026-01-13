import loading from '../../img/loading.svg'

import sytles from './Loading.module.css'

function Loading () {
    return (
        <div className={sytles.loader_container}>
            <img className={sytles.loader} src={loading} alt='Loading'/>
        </div>
    )
}

export default Loading