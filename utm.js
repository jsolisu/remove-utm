const params = ['fbclid', 'utm_campaign', 'utm_content', 'utm_medium', 'utm_source', 'utm_term', 'sc_cid', 'WT.mc_id', 'hss_channel',
    'cid_source', 'cid_medium', 'cid', 'cid_content'];

const url = new URL(location.href);
params.forEach((param) => {
    url.searchParams.delete(param);
});

history.replaceState(null, '', url.href);