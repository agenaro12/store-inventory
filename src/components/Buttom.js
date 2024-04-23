import ClassModule from './Buttom.module.css';

const Buttom = ({clickHandle,content,value}) => {
    const onClicHandle = () => {
        clickHandle(value);
    }
    return (<button className={ClassModule.Buttom__orage} onClick={onClicHandle}>{content}</button>);
}

export default Buttom;