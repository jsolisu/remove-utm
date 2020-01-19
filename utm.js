const params = ['fbclid', 'utm_source', 'utm_medium', 'utm_campaign'];

const url = new URL(location.href);
params.forEach((param) => {
    url.searchParams.delete(param);
});

history.replaceState(null, '', url.href);