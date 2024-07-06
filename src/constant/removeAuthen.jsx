export const removeToken = () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
            const tokenDefault = 'youpassingthisisjustmockuptester'
        if (tokenDefault == token) {
          localStorage.removeItem('token');
          return true;
        } else {
          localStorage.removeItem('token');
          return true;
        }
      } catch (error) {
        return false;
      }
    }
    return false;
  };

export default removeToken;