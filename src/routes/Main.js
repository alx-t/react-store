import MainPage from '~/src/components/views/MainPage';
import { mainPath } from '~/src/helpers/routes';

export default {
  path: mainPath(),
  component: MainPage,
  exact: true,
  strict: true
};
