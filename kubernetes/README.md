kubectl cluster-info
kubectl get pods
kubectl --namespace=kube-system get pods
kubectl (-f) describe pod plik
kubectl delete pod nazwa
kubectl (create) apply -f my-nginx-pod.yaml


kubectl apply -f my-nginx-replicaset.yaml
kubectl scale --replicas=7 -f my-nginx-replicaset.yaml
kubectl scale --replicas=3 rs my-nginx-replicaset
kubectl delete rs my-nginx-replicaset
kubectl apply -f my-nginx-deployment.yaml
kubectl apply -f mybackendlb-clusterip.yaml
kubectl get all  wyświetla wszystkie informacje o serwisach podach, deploymentach...

Projekt aplikackji wielokontenerowej w kubernetes

Ruch przychodzący jest odbierany za pomocą komponentu Ingress myapp-ingress i kierowany w dwa miejsca w zależności od otrzymanego adresu url:
/ jest kierowane na my-nginx-clusterip a stamtąd poprzez zmodyfikowany wpis w konfiguracji w pliku nginx.conf na myfrontendlb-clusterip.

/rowery/(.*) jest kierowane na mybackendlb-clusterip jako zapytanie do api.W komponencie mybackendlb-deployment są odwołania do kontenerów myredislb-clusterip oraz postgres-clusterip 

Z Dockerhuba kubernetes pobiera 3 obrazy i tworzy kontenery do aplikacji takie jak:
tplawczyk/mynginxlb_k8s
tplawczyk/mybackendlb_k8s
tplawczyk/mynginxlb_k8s

Pozostałe dwa postgress i redis są tworzone na standardowyvh obrazach redis:alpine oraz postgres:alpine dodatkowo zmodyfikowanych o dostępy do bazy danych oraz montowane pamięci persystentne. 

