./clean-all.sh
echo "######################################## Working on app2"
cd app2
npm install
npm run build
cd ..
## 
echo "######################################## Working on app2"
cd micro-app1
npm install
npm run build
cd ..
##
echo "######################################## Working on shell-frontend"
cd shell-frontend
npm install
npm run build
cd ..