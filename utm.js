const params = ['fbclid', 'utm_campaign', 'utm_content', 'utm_medium', 'utm_source'];

const url = new URL(location.href);
params.forEach((param) => {
    url.searchParams.delete(param);
});

history.replaceState(null, '', url.href);