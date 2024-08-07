#=========================================================#
# █▀▄▀█ ▄▄▄ █▀▀▄ █  █     ▄▀▀█▀▀▄  ▄▄▄  ▄▄▄ █  █     #
# █ █ █ █▄▄  ▀▀▄ █▀▀█ ▀▀▀    █     █▄▄  █    █▀▀█     #
# █   █ █▄▄ ▀▄▄█ █  █         █     █▄▄  █▄▄ █  █      #
#     𝗠𝗨𝗟𝗧𝗜𝗗𝗘𝗩𝗜𝗖𝗘 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗨𝗦𝗘𝗥 𝗕𝗢𝗧                    #
#=========================================================#
# 
#    * @project_name : Mesh-Tech
#    * @author : @Mesh KE
#    * @youtube : https://youtube.com/@meshkip
#    * @description : Mesh-Tech ,A Multi-functional whatsapp bot md.
#    * @version 1.4.0


 

FROM quay.io/djmeshk/mesh-v2
RUN git clone https://github.com/DJMESHK/Mesh-Tech
/root/luv
RUN rm -rf /root/luv/.git
WORKDIR /root/luv
RUN npm install || yarn install
EXPOSE 8000
CMD ["npm","start" ] 
































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































# heroku.yml file data to run Container
# build:
#   docker:
#       web: Suhail_Md
# run:
#   web: npm start
 
