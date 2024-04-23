import classModule from './footer.module.css';

const Footer = (props) => {
    const bottom = (
        <div className={classModule.mainFooter}>
            <p>Powered By Genaro Aguiluz</p>
        </div>
    );
    return bottom
}

export default Footer;