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