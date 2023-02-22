module.exports = {
    apps: [{
        name: 'asignment_2',
        script: './build/index.js',
        node_args: '-r ts-node/register -r tsconfig-paths/register',
        watch: true,
        restart_delay: 10000,
        wait_ready: true,
        exec_mode: 'cluster',
    }],
};