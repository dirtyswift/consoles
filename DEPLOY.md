# Déploiement — VPS Hostinger

Site : **https://consoles.dirtylab.fr**
Stack : Next.js 16 standalone · Docker · Traefik v2 (certresolver `myresolver`)

---

## 1 · DNS

Créer un enregistrement A (ou CNAME) pour `consoles.dirtylab.fr` pointant vers l'IP du VPS. Propagation : quelques minutes.

## 2 · Pousser sur GitHub (en local)

Repo : `dirtyswift/consoles`.

```bash
cd /Users/dirty/Dropbox/Dev/Consoles
git init
git add .
git commit -m "feat: initial site — cabinet des consoles"
git branch -M main
git remote add origin git@github.com:dirtyswift/consoles.git
git push -u origin main
```

## 3 · Déploiement sur le VPS

### Premier déploiement

```bash
ssh root@<vps>
cd /root
git clone git@github.com:dirtyswift/consoles.git
cd consoles
docker compose up -d --build
```

Traefik détecte automatiquement les labels, Let's Encrypt émet le cert, le site répond en HTTPS sous 1-2 min.

### Mises à jour suivantes

```bash
cd /root/consoles
git pull
docker compose up -d --build
```

### Logs / debug

```bash
docker compose logs -f consoles
docker ps | grep consoles
docker inspect consoles-app | grep -i traefik
```

### Stop / restart

```bash
docker compose restart consoles
docker compose down
```

## 4 · Vérifications

| Check | Commande |
|---|---|
| Container up | `docker ps \| grep consoles-app` |
| Network Traefik OK | `docker network inspect traefik-net \| grep consoles-app` |
| Route Traefik active | `curl -I https://consoles.dirtylab.fr` → 200 |
| Cert Let's Encrypt | `curl -vI https://consoles.dirtylab.fr 2>&1 \| grep subject` |

## 5 · Ressources

Site statique, aucune DB. RAM runtime ≈ 80-150 Mo. Build ponctuel consomme ~1 Go RAM (multi-stage, isolé).
Image finale ≈ 180 Mo (standalone output).

Aucun volume persistant nécessaire.
