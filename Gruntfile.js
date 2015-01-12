module.exports = function(grunt) {

    grunt.initConfig({
        // 转化
        transport: {
            options: {
                debug: false,
                idleading: 'dist/',
                alias: {
                    $: '$'
                }
            },
            app: {
                files: [
                    {
                        cwd: 'js',
                        expand: true,
                        src: '**/*.js',
                        dest: '.build'
                    }
                ]
            }
        },
        // 合并
        concat: {
            app: {
                options: {
                    relative: true
                },
                files: [
                    {
                        expand: true,
                        cwd: '.build/app',
                        src: '**/index.js',
                        dest: 'public/js/dist/app'
                    }
                ]
            }
        },
        // 压缩
        uglify: {
            app: {
                files: [
                    {
                        expand: true,
                        cwd: 'public/js/dist/',
                        src: '**/*.js',
                        dest: 'public/js/dist/',
                        ext: '.js'
                    }
                ]
            },
            jquery: {
                files: [
                    {
                        src: 'public/js/jquery/jquery-1.10.1.js',
                        dest: 'public/js/jquery/jquery.js'
                    }
                ]
            }
        },
        // 清理
        clean: {
            build: ['.build']
        }
    });

    grunt.loadNpmTasks('grunt-cmd-transport');
    grunt.loadNpmTasks('grunt-cmd-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');

    // 默认任务:转化，合并，压缩，清理
    grunt.registerTask('default', [ 'transport', 'concat', 'uglify', 'clean']);
//    jquery任务：压缩jquery
    grunt.registerTask('jquery', ['uglify:jquery']);
}
