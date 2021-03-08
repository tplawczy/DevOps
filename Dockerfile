#1. Wybieramy obraz bazowy
FROM node:alpine

#2. Instalujemy w nm zaleznosci potrzebne do uruchomienia "procesu glownego"
WORKDIR /opt/myapp

COPY ./package.json ./

RUN npm install



COPY ./ ./
CMD ["npm","start"]