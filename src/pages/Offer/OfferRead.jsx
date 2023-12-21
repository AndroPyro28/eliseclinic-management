import useLanguage from '@/locale/useLanguage';
import ReadOfferModule from '@/modules/OfferModule/ReadOfferModule';

export default function OfferRead() {
  const translate = useLanguage();

  const entity = 'offer';
  const Labels = {
    PANEL_TITLE: 'Invoice offer',
    DATATABLE_TITLE: 'Invoice offer list',
    ADD_NEW_ENTITY: translate('add_new_offer_list'),
    ENTITY_NAME: translate('offer'),
    CREATE_ENTITY: translate('save'),
    UPDATE_ENTITY: translate('update'),
  };

  const configPage = {
    entity,
    ...Labels,
  };
  return <ReadOfferModule config={configPage} />;
}
