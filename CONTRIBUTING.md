# Contributing

## Opening Issues

The issue log is at [galaxy-issues](https://github.com/ansible/galaxy-issues). Eventually it will be merged into the Galaxy repo, but for now please continue to open issues there.

## Development

To setup a local development environment you will need to install the following:

* [Ansible Container 0.3.0+](https://github.com/ansible/ansible-container)
* [Ansible 2.1.1.0+](https://github.com/ansible/ansible)

We recommend using [Git Flow](https://github.com/nvie/gitflow), although it's not strictly required. Any development 
should be done in feature branches and compared to the `develop` branch.

### Start a Feature

Clone the [Galaxy repo](https://github.com/ansible/galaxy) to your local projects folder:

```
cd ~/projects
git clone git@github.com:ansible/galaxy.git
```

Configure git with your name and email so that your commits are correctly associated with your GitHub account:

```
cd ~/projects/galaxy/
git config user.name "Joe Developer"
git config user.email "joe@ansibleworks.com"
```

Start developing by first creating a feature branch. The simplest way is by using Git Flow: 

```
cd ~/projects/galaxy
git flow feature start mynewfeature
```

### Build Galaxy

You should already have Docker running and Ansible Container installed. To build the Galaxy images, run the following from the root directory of your Galaxy clone:

```
$ make build
```

**NOTE**: The build process downloads images from Docker Hub for most services, excluding *django* and *gulp*. The *django* and *gulp* services are built from a *centos:7* base image, and the build involves downloading and installing both *yum* and *pip* packages. The build can run from 10 minutes up to an hour depending on the speed of your internet connection, and the amount of available CPU and memory.

After the build completes, you will see the following Docker images:

```
$ docker images
REPOSITORY                          TAG                 IMAGE ID            CREATED             SIZE
galaxy-django                       20160919015153      cb4deac13890        15 hours ago        619.5 MB
galaxy-django                       latest              cb4deac13890        15 hours ago        619.5 MB
galaxy-gulp                         20160919015153      a9c8919e1a05        16 hours ago        482 MB
galaxy-gulp                         latest              a9c8919e1a05        16 hours ago        482 MB
ansible/ansible-container-builder   0.2                 0e13266a8f4a        31 hours ago        831.3 MB
centos                              7                   980e0e4c79ec        12 days ago         196.8 MB
elasticsearch                       latest              31347bae83b8        2 weeks ago         344.9 MB
python                              2.7                 4c5f5839b372        2 weeks ago         675.3 MB
postgres                            9.4                 7ba4f6e9e5fe        2 weeks ago         264.9 MB
postgres                            latest              6f86882e145d        2 weeks ago         265.9 MB
memcached                           latest              228303902e2e        2 weeks ago         128.2 MB
rabbitmq                            latest              0463354ada4d        3 weeks ago         180.8 MB
```

Start the services by running the following:

```
$ make run
```

The first time you start the application, the *django* container will perform migrations, and load test data. Performing these operations delays the start of the web server for a few moments. As the container starts, you will see output from */setup/dbinit.yml* that looks like the following:

```
Attaching to ansible_gulp_1, ansible_django_1
django_1             |
django_1             | PLAY [Database init] ***********************************************************
django_1             |
django_1             | TASK [Wait for postgresql] *****************************************************
django_1             | ok: [localhost]
django_1             |
django_1             | TASK [Perform initial migrations] **********************************************
gulp_1               | [16:08:04] Using gulpfile /galaxy/gulpfile.js
gulp_1               | [16:08:04] Starting 'less'...
gulp_1               | [16:08:04] Starting 'watch'...
gulp_1               | [16:08:05] Finished 'watch' after 1.01 s
gulp_1               | [16:08:06] Finished 'less' after 1.76 s
gulp_1               | [16:08:06] Starting 'default'...
gulp_1               | [16:08:06] Finished 'default' after 34 μs
django_1             | changed: [localhost]
django_1             |
django_1             | TASK [Disable triggers] ********************************************************
django_1             | changed: [localhost]
django_1             |
django_1             | TASK [Import testing data] *****************************************************
django_1             | changed: [localhost]
django_1             |
django_1             | TASK [Enable triggers] *********************************************************
django_1             | changed: [localhost]
django_1             |
django_1             | TASK [Update django site name] *************************************************
django_1             | changed: [localhost]
django_1             |
django_1             | TASK [Remove any log files] ****************************************************
django_1             | changed: [localhost]
django_1             |  [WARNING]: Consider using file module with state=absent rather than running rm
django_1             |
django_1             | TASK [Create dbinit.completed] *************************************************
django_1             | changed: [localhost]
django_1             |
django_1             | PLAY RECAP *********************************************************************
django_1             | localhost                  : ok=11   changed=10   unreachable=0    failed=0
django_1             |
django_1             | /galaxy
```

The *postgres*, *memcache*, *elasticsearch*, and *rabbitmq* services will run in the background, while *django* and *gulp* execute in the foreground. The logs for the web server, celery and gulp will be displaybed in real-time. You can access the web server using the URL: [http://localhost:8000](http://localhost:8000).

**NOTE**: If you're running Docker Machine, replace *localhost* with the IP address of the Virtual Machine. User `docker-machine ip default` to get the IP, replacing *default* with the name of your VM.

### Rebuild Search Indexes

If you plan to use the Browse page on your local Galaxy server, you'll need to build the Elasticsearch indexes. Once your web server is running, meaning that migrations completed and test data loaded (as discussed above), run the following command from the *galaxy* project root to manually build the indexes:

```
$ make build_indexes
```

The process may take up to 10 minutes to complete the index build.

### Create an Admin User

To create a superuser with access to the admin site, open a new terminal session or window, and run `make createsuperuser`. The following shows the creation of an admin user: 

```
$ make createsuperuser
Create Superuser

Username: admin
Email address: noemail@noemail.com
Password:
Password (again):
Superuser created successfully.
```
The admin site can be accessed at [http://localhost:8000/admin](http://localhost:8000/admin).

### Connect to GitHub

To log into the development site, you first have to authorize it as a GitHub Oauth Application. You can do this by logging 
into GitHub, going to Personal Settings, choosing `Oauth Applications`, and then doing the following to create a new app:

- Click `Register New Application`
- Set the *Homepage URL* to `http://localhost:8000`. If you're using Docker Machine, replace *localhost* with the IP address 
of the Virtualbox host.
- Set the *Authorization Callback URL* to `http://localhost:8000/accounts/github/login/callback/`. And again, if you're using Docker Machine, replace *localhost* with the IP address of the Virtualbox host.

After you save the new application, access your local Galaxy admin site at [http://localhost:8000/admin](http://localhost:8000/admin). If you have not already done so, follow the *Create an Admin User* instructions above. 

After logging into the admin site, you'll create a new social application. Start by finding `Social applications` at the bottom of the table, and clicking the *Add* button to its right. On the next screen, set the *provider* to `GitHub`, and enter `GitHub` as the *name*. From the new GitHub Oauth application you just created, copy the *ClientID* value into *Client id*, and copy the *Client Secret* value into *Secret key*. Under *Sites*, add `localhost` to *Chosen sites*. Save the changes.

Log out of the *admin* account, and go back to [http://localhost:8000(http://localhost:8000). Click the GitHub logo under `Log into Galaxy with GitHub`. On the next screen, you should see the message `Verify Your Email Address`.

The email was written to a log file found on the *django* container. To access it, use the following commands to connect to the container and view the file:
```
# Connect to the container and start the bash shell
$ docker exec -it ansible_django_1 /bin/bash

# Set the working directory to /galaxy_logs/email
$ cd /galaxy_logs/email

# List the log files
$ ls -l

total 4
-rw-r--r-- 1 django root 863 Jan 19 05:04 20170119-000450-139972593475792.log

# Show the contents of the latest message
$ cat 20170119-000450-139972593475792.log

From: webmaster@localhost
To: foo@gmail.com
Date: Thu, 19 Jan 2017 05:04:50 -0000
Message-ID: <20170119050450.181.62126@c164ede7ada7>

You are receiving this email because someone (hopefully you) created an account at https://galaxy.ansible.com. To confirm this is correct, please click on the following link to verify your email address:

http://localhost:8000/accounts/confirm-email/MQ:1cU4u2:SfDV-p07an0_hv5K9ggi1kuPbJM/

If you believe you have received this email in error, please disregard it.

If you have any questions regarding this email, or if you have trouble with the link provided above, please contact support.

Thanks!
```
From the latest log file, retrieve the verification URL, and paste it into your browser. Once the page loads, click the `Confirm` button, and on the next page click the blue GitHub logo to log in.

### Stop Services and Other Commands

Ctrl-C or closing the terminal session window stops the containers running in the foreground. To stop all containers, open a seccon terminal session or window, and run `make stop`. Use `docker ps` to check the state of the services.

Review the Makefile for additional commands. Examples include:

- `make psql` to access the database command line tool 
- `make migrate` to generate and apply Django migrations
- `make refresh` to remove all galaxy images, containers, logging data, rebuild images, and restart the containers 
- `make clean` to remove all galaxy images, containers and logging data

### Submitting Code

Code submissions are accepted via pull requests (PR), and they are always welcome! We may not accept them all, but we are 
always happy to review and discuss them with you.

Before submitting a large pull request for a new feature, we suggest opening an issue to discuss the feature prior to 
submission.

We reserve the right to reject submissions that are not a good fit for the project or not in keeping with the intended 
direction of the project. If you are unsure as to whether a feature is a good fit, take the time to open an issue.

Please observe the following when submitting a PR:

* Rebase instead of merge (http://git-scm.com/book/en/Git-Branching-Rebasing).
* Follow the Git Flow branching model and develop in a feature branch
* Limit the scope of a submission to a single feature or bug fix.
* Before embarking on a large feature, open an issue and submit the feature for review by the community



