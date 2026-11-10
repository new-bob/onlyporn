const event = require('./event');

// Analytics is disabled; keep existing callers compatible.
function track() {}

module.exports = {
    event,
    track
};