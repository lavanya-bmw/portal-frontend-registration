import Button from './button'
import { Container, Row, Col } from 'react-bootstrap'
import Footer from './footer'
import Header from './cax-header'
import { useHistory, withRouter } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export const Imprint = () => {
    const { t } = useTranslation()
    const history = useHistory()

    return (
        <Container>
            <Header />
            <Row className="footer-content">
                <Col>
                    <div className="mx-auto col-10">
                        <h4>{t('imprint.title')}</h4>
                        <p>{t('imprint.imprintText1')}.</p>
                        <div>{t('imprint.imprintText2')}</div>
                        <div className="button-section">
                            <Button
                                label={t('footerPages.Back')}
                                styleClass="button btn-primaryCax"
                                handleClick={() => history.goBack()}
                            />
                        </div>
                    </div>
                </Col>
            </Row>
            <Footer />
        </Container>
    )
}

export default withRouter(Imprint)