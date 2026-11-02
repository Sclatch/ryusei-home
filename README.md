# Ryusei Home - Personal Homelab Site



<div style="text-align: center;">

![Ryusei Logo](public/images/ryuseitext_colour.png)

<a href="https://ryusei.dedyn.io" style="font-size: 1.5em"> ✨ Ryusei Website ✨</a>

This is a basic simple static website using Next.JS and Tailwind CSS framework. This whole project is simple, lightweight, and small.

</div>

## About this project

I personaly created this project to polish my web building skill while also utilizing LLM. I have a personal homelab that is partially open to the internet and most of the services are locked locally. Creating a landing page to my homelab and introducing the available services seems like a fun project to do. It will also help my friends who use my server for the services that I have provided.

While Code Agent LLM is used in this project, It is mostly about back-and-forth interaction between what the AI offered and me rejecting or approving the changes. It's kept to a minimal level while I am still in control and understand the code.

## Getting Started

If you want to run this website on your own local machine or edit the content, go to the root repo directory and type:

*(Be warned that I personally use pnpm in this project because I have never used it in the past and wanted to learn)*
```bash
pnpm install
```

And then you can run the dev server:

```bash
pnpm dev
```
### Docker Image

My personal server is using containerization heavily, so an image to provide my own landing page helps a lot.
The provided `Dockerfile` should be able to build the image without a hassle. 
However if you want to pull the built image, it is available publically in GHCR:

```bash
docker pull ghcr.io/sclatch/ryusei-home:latest
```

If you want to build the image your self with your own modifications, go to the root directory and a simple docker build command should run it:

```bash
docker build -t ryusei-home:<tag> .
```
