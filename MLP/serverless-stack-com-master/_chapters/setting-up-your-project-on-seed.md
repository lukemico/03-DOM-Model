---
layout: post
title: Setting up Your Project on Seed
date: 2018-03-12 00:00:00
description: To automate our Serverless deployments, we will use a service called Seed (https://seed.run). We will sign up for a free account, add our project repository, and set our AWS IAM credentials.
context: true
comments_id: setting-up-your-project-on-seed/175
---

We are going to use [Seed](https://seed.run) to automate our serverless deployments and manage our environments.

Start by signing up for a free account [here](https://console.seed.run/signup-account).

![Create new Seed account screenshot](/assets/part2/create-new-seed-account.png)

Let's **Add your first app**.

![Add your first Seed app screenshot](/assets/part2/add-your-first-seed-app.png)

Now to add your project, select **GitHub** as your git provider. You'll be asked to give Seed permission to your GitHub account.

![Select Git provider screenshot](/assets/part2/select-git-provider.png)

Select the repo we've been using so far.

Seed deploys to your AWS account on your behalf. You should create a separate IAM user with exact permissions that your project needs. You can read more about this [here](https://seed.run/docs/customizing-your-iam-policy). But for now we'll simply use the one we've used in this tutorial.

<img class="code-marker" src="/assets/s.png" />Run the following command.

``` bash
$ cat ~/.aws/credentials
```

The output should look something like this.

```
[default]
aws_access_key_id = YOUR_IAM_ACCESS_KEY
aws_secret_access_key = YOUR_IAM_SECRET_KEY
```

Fill these in and click **Add**.

![Select GitHub repo screenshot](/assets/part2/select-github-repo.png)

Click on your newly created app.

![Click on new Seed app screenshot](/assets/part2/click-on-new-seed-app.png)

You'll notice a few things here. First, we have a service called **default**. A Serverless app can have multiple services within it. A service (roughly speaking) is a reference to a `serverless.yml` file. In our case we have one service in the root of our repo. Second, we have two stages (environments) set up for our app. Our **dev** stage is hooked up to master. This means that any commits to master will trigger a build in dev.

Click on **default**.

![Click default service in Seed project screenshot](/assets/part2/click-default-service-in-seed-project.png)

You'll see that the stages this service has. Next click **dev**.

![Click dev stage in Seed project screenshot](/assets/part2/click-dev-stage-in-seed-project.png)

You'll see that we haven't deployed to this stage yet.

![Dev stage in Seed project screenshot](/assets/part2/dev-stage-in-seed-project.png)

However, before we do that, we'll need to add our secret environment variables.
