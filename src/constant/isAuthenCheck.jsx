export const isAuthTokenValid = () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
            const tokenDefault = 'youpassingthisisjustmockuptester'
        if (tokenDefault == token) {
          return true;
        } else {
          localStorage.removeItem('token');
          return false;
        }
      } catch (error) {
        return false;
      }
    }
    return false;
  };