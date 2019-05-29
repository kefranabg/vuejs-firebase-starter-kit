const exec = util.promisify(require('child_process').exec)
const shell = require('shelljs')

/**
 * Remove npm dependencies which are only used by this script
 * @returns {Promise<any>}
 */
module.exports = async () => {
  return await exec(
    'npm uninstall rimraf compare-versions chalk shelljs read-pkg write-pkg inquirer ora --save-dev'
  )
}
