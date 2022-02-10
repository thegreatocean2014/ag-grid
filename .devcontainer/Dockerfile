# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.217.1/containers/ubuntu/.devcontainer/base.Dockerfile

# [Choice] Ubuntu version (use hirsuite or bionic on local arm64/Apple Silicon): hirsute, focal, bionic
ARG VARIANT="hirsute"
FROM mcr.microsoft.com/vscode/devcontainers/base:0-${VARIANT}

# [Optional] Uncomment this section to install additional OS packages.
RUN apt-key adv --fetch-keys "https://keyserver.ubuntu.com/pks/lookup?op=get&search=0xea6e302dc78cc4b087cfc3570ebea9b02842f111" && \
    echo 'deb http://ppa.launchpad.net/chromium-team/beta/ubuntu ${VARIANT} main ' >> /etc/apt/sources.list.d/chromium-team-beta.list && \
    apt-get update && \
    export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends \
        pkg-config \
        # node-canvas dependencies. \
        libpixman-1-dev libcairo2-dev libpango1.0-dev libjpeg8-dev libgif-dev chromium-browser
