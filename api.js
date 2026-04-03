const API_BASE = 'https://nikhil-backend-d73f.onrender.com/api';

async function apiCall(endpoint, method = 'GET', body = null) {
  try {
    const options = {
      method,
      headers: { 'Content-Type': 'application/json' }
    };
    if (body) options.body = JSON.stringify(body);
    const res = await fetch(${API_BASE}, options);
    const data = await res.json();
    if (!data.success && res.status >= 400) throw new Error(data.error || 'API error');
    return data;
  } catch (err) {
    console.error(API Error [ ]:, err.message);
    throw err;
  }
}

const ArticlesAPI = {
  getAll: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return apiCall(/articles);
  },
  getOne: (id) => apiCall(/articles/),
  create: (data) => apiCall('/articles', 'POST', data),
  update: (id, data) => apiCall(/articles/, 'PUT', data),
  delete: (id) => apiCall(/articles/, 'DELETE'),
  setStatus: (id, status) => apiCall(/articles//status, 'PUT', { status })
};

const ProfileAPI = {
  get: () => apiCall('/profile'),
  update: (data) => apiCall('/profile', 'PUT', data),
  uploadPhoto: (base64) => apiCall('/profile/photo', 'PUT', { photo: base64 }),
  deletePhoto: () => apiCall('/profile/photo', 'DELETE')
};
