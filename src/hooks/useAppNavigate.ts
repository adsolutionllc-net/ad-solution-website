import { useNavigate } from 'react-router-dom';

const PAGE_TO_PATH: Record<string, string> = {
  home: '/',
  openings: '/openings',
  resume: '/resume',
  'request-talent': '/request-talent',
};

/**
 * Returns a navigate(page, scrollTarget?) function matching the app's
 * original page-key based interface, backed by react-router under the hood.
 * Keeps Header/Footer/etc. untouched while routes get real URLs.
 */
export function useAppNavigate() {
  const routerNavigate = useNavigate();

  return (page: string, scrollTarget?: string) => {
    const path = PAGE_TO_PATH[page] ?? `/${page}`;
    routerNavigate(path, scrollTarget ? { state: { scrollTarget } } : undefined);
  };
}
